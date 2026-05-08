<template>
  <canvas ref="shaderCanvas" class="shader-background"></canvas>
</template>

<script>
export default {
  name: "ShaderBackground",
  mounted() {
    const canvas = this.$refs.shaderCanvas;
    const gl = canvas.getContext("webgl");
    const mouse = { x: 0.5, y: 0.5 }; 

    if (!gl) {
      console.error("WebGL nicht unterstützt");
      return;
    }

    // Canvas auf volle Größe setzen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    const vertShaderSrc = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragShaderSrc = `
        precision mediump float;
        uniform vec2 uResolution;
        uniform vec2 uMouse;

        void main() {
            float aspect = uResolution.x / uResolution.y;

            // Normierte Pixel-Koordinaten
            vec2 st = gl_FragCoord.xy / uResolution.y;

            // Maus-Offset: verschiebt das Grid basierend auf Maus
            vec2 offset = uMouse * 5.0;
            st += offset;

            float scale = 15.0;

            // Gridlines
            vec2 grid = fract(st * scale);
            float lineWidth = 0.05;
            float line = step(grid.x, lineWidth) + step(grid.y, lineWidth);
            line = clamp(line, 0.0, 1.0);

            vec3 bgColor = vec3(1.0/255.0, 57.0/255.0, 104.0/255.0);
            vec3 gridColor = vec3(1.0/255.0, 41.0/255.0, 84.0/255.0);

            vec3 color = mix(bgColor, gridColor, line);

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Shader compile helper
    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      return shader;
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vertShaderSrc);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fragShaderSrc);

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttrib = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    gl.uniform2f(uResolution, canvas.width, canvas.height);

    window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth)*-0.3 * 0.1; 
        mouse.y = (e.clientY / window.innerHeight)*0.2 * 0.1; 
    });

    const uMouse = gl.getUniformLocation(program, "uMouse");
    gl.uniform2f(uMouse, mouse.x, mouse.y);

    let startTime = performance.now();

    function render() {
        const currentTime = (performance.now() - startTime) / 1000;
        gl.uniform1f(uTime, currentTime);

        // Maus-Uniform updaten
        gl.uniform2f(uMouse, mouse.x, mouse.y);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }

    render();

    // Resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    });
  }
};
</script>

<style scoped>
.shader-background {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* hinter allem */
}
</style>