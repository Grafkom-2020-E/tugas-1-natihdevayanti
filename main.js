function main() {
  var canvas = document.getElementById("myCanvas");

  var gl = canvas.getContext("webgl");
  // add event listener memanggil fs onmousedown-> 
  canvas.addEventListener("mousedown", function (event) {
    onmousedown(event);
  });

  function onmousedown(event) {
    var x = event.clientX, y = event.clientY;

    var midX = canvas.width / 2, midY = canvas.height / 2;

    var rect = event.target.getBoundingClientRect();

    x = ((x - rect.left) - midX) / midX;
    y = (midY - (y - rect.top)) / midY;

    console.log(x + ", " + y);
  }

  var vertices = [

    //HURUF I
    //Segitiga 1
    -0.5087494602098, -0.3028271754383, 1.0, 0.5, 0.5,
    -0.249483597768, -0.9016096782292, 1.0, 0.7, 0.8,
    -0.5151948867692, -0.8984275071035, 1.0, 0.5, 0.5,

    //Segitiga 2
    -0.2515305912169, -0.3028271754383, 1.0, 0.5, 0.5,
    -0.5087494602098, -0.3028271754383, 1.0, 0.7, 0.8,
    -0.249483597768, -0.9016096782292, 1.0, 0.5, 0.5,

    //Love
    -0.4408054830978, -0.1450444545418, 1.0, 0.5, 0.5,
    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.3970083211988, -0.1440923423266, 1.0, 0.5, 0.5,

    -0.4408054830978, -0.1450444545418, 1.0, 0.5, 0.5,
    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.4584195590789, -0.1726557087825, 1.0, 0.5, 0.5,

    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.4584195590789, -0.1726557087825, 1.0, 0.5, 0.5,
    -0.4450899880661, -0.2202613195422, 1.0, 0.5, 0.5,

    -0.4450899880661, -0.2202613195422, 1.0, 0.5, 0.5,
    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.3703491791733, -0.2802443890995, 1.0, 0.5, 0.5,

    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.3703491791733, -0.2802443890995, 1.0, 0.5, 0.5,
    -0.3, -0.22, 1.0, 0.5, 0.5,

    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.283230911483, -0.1726557087825, 1.0, 0.5, 0.5,
    -0.3, -0.22, 1.0, 0.5, 0.5,

    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.283230911483, -0.1726557087825, 1.0, 0.5, 0.5,
    -0.3056055485401, -0.1436162862191, 1.0, 0.5, 0.5,

    -0.3708252352809, -0.1807486626117, 1.0, 0.713, 0.75,
    -0.3056055485401, -0.1436162862191, 1.0, 0.5, 0.5,
    -0.3441660932555, -0.1445683984342, 1.0, 0.5, 0.5,

    //Huruf T
    //Segitiga 1
    -0.1, -0.3, 0.86, 0.44, 0.58,
    0.4644686406996, -0.5019050826786, 1.0, 0.713, 0.75,
    -0.1, -0.5, 0.86, 0.44, 0.58,
    //Segitiga 2
    0.4634977103363, -0.3002338134397, 0.86, 0.44, 0.58,
    -0.1, -0.3, 1.0, 0.713, 0.75,
    0.4644686406996, -0.5019050826786, 0.86, 0.44, 0.58,

    //Segitiga 3
    0.09, -0.5, 0.86, 0.44, 0.58,
    0.0755115044848, -0.8979571744361, 0.86, 0.44, 0.58,
    0.3, -0.9, 1.0, 0.713, 0.75,
    //Segitiga 4
    0.09, -0.5, 0.86, 0.44, 0.58,
    0.3, -0.5, 0.86, 0.44, 0.58,
    0.3, -0.9, 1.0, 0.713, 0.75,

    //Angka 1
    -0.5779268912972, 0.5282292413308, 1.0, 0.5, 0.5, //Titik B
    -0.5784556844101, 0.3965846149975, 1.0, 0.5, 0.5,
    -0.4635078729923, 0.4414286067546, 1.0, 0.5, 0.5,
    -0.4640677318305, 0.0999514498335, 1.0, 0.5, 0.5,
    -0.3, 0.1, 0.78, 0.08, 0.52,
    -0.2980268118595, 0.5991165201373, 0.78, 0.08, 0.52,
    -0.4291596940834, 0.6006731642485, 0.78, 0.08, 0.52,

    //Angka 6
    0.1, 0.6, 1.0, 0.5, 0.5, //Titik I
    -0.0625083788508, 0.6005118395312, 0.78, 0.08, 0.52,
    -0.1551534827755, 0.5446086505181, 0.78, 0.08, 0.52,
    -0.218887902823, 0.4651015070936, 0.78, 0.08, 0.52,
    -0.2178428169557, 0.227910854414, 0.78, 0.08, 0.52,
    -0.1810060186674, 0.1697474886956, 0.78, 0.08, 0.52,
    -0.1002402444853, 0.1146757101701, 0.78, 0.08, 0.52,
    0.0, 0.1, 1.0, 0.5, 0.5,
    0.0690555975011, 0.1298285178055, 1.0, 0.5, 0.5,
    0.1, 0.2, 1.0, 0.5, 0.5,
    0.1, 0.3, 1.0, 0.5, 0.5,
    0.0639336706663, 0.3528606288878, 1.0, 0.5, 0.5,
    0.0177766180361, 0.3790162920449, 1.0, 0.5, 0.5,
    -0.0270681779595, 0.3881883760813, 1.0, 0.5, 0.5,
    -0.0997943344053, 0.3850936460197, 0.78, 0.08, 0.52,
    -0.0982469693745, 0.454725072404, 0.78, 0.08, 0.52,
    -0.0394470982056, 0.4995986582961, 1.0, 0.5, 0.5,
    0.1, 0.5, 1.0, 0.5, 0.5,


    //bulat
    -0.0514589609092, 0.3020878709945, 0.78, 0.08, 0.52, //Titik W
    -0.0874154141592, 0.2876096490817, 0.78, 0.08, 0.52,
    -0.0936048742823, 0.2396413331281, 0.78, 0.08, 0.52,
    -0.0590690537791, 0.2045789116201, 0.78, 0.08, 0.52,
    0, 0.2, 1.0, 0.5, 0.5,
    0.0286369631479, 0.2334518730051, 1.0, 0.5, 0.5,
    0.0301843281787, 0.2798728239279, 1.0, 0.5, 0.5,
    0.0, 0.3, 1.0, 0.5, 0.5,

    //Angka 3
    0.2, 0.6, 1.0, 0.5, 0.5, //Titik B
    0.2, 0.5, 1.0, 0.5, 0.5,
    0.3335849958502, 0.5013071057737, 1.0, 0.5, 0.5,
    0.2414362586671, 0.3511387933271, 1.0, 0.5, 0.5,
    0.3421172863302, 0.2009704808805, 1.0, 0.5, 0.5,
    0.3421172863302, 0.2009704808805, 1.0, 0.5, 0.5,
    0.2, 0.2, 1.0, 0.5, 0.5,
    0.2, 0.1, 1.0, 0.5, 0.5,
    0.4175860652893, 0.0997986338004, 0.78, 0.08, 0.52,
    0.4571650603369, 0.1472934278576, 0.78, 0.08, 0.52,
    0.4624422596766, 0.2000654212545, 0.78, 0.08, 0.52,
    0.3762464482498, 0.3443129609432, 0.78, 0.08, 0.52,
    0.4598036600068, 0.5021850834518, 0.78, 0.08, 0.52,
    0.4541667081506, 0.5643334372379, 0.78, 0.08, 0.52,
    0.4136281657845, 0.599813271236, 0.78, 0.08, 0.52,

  ];

  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var vertexShaderSource = document.getElementById("vertexShaderSource").text;
  var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

  // Buat .c di GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Kompilasi .c agar menjadi .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Siapkan wadah untuk .exe (shader program)
  var shaderProgram = gl.createProgram();

  // Masukkan .o ke dalam wadah .exe
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Sambungkan antar .o agar bisa menjadi
  //    runnable context di dalam wadah .exe tadi
  gl.linkProgram(shaderProgram);

  // Mulai menggunakan konteks (cat)
  gl.useProgram(shaderProgram);

  // Ajarkan attribute a_Position di GPU
  //  tentang pengambilan data verteks dari ARRAY_BUFFER
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  gl.vertexAttribPointer(
    aPositionLoc,
    2,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    0);
  gl.vertexAttribPointer(
    aColorLoc,
    3,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aPositionLoc);
  gl.enableVertexAttribArray(aColorLoc);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);


  function draw() {
    gl.clearColor(0.89, 0.76, 0.79, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //huruf I
    var primitive = gl.TRIANGLE_STRIP;
    var offset = 0;
    var nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    //love
    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    //huruf T
    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    primitive = gl.TRIANGLE_STRIP;
    offset += nVertex;
    nVertex = 3;
    gl.drawArrays(primitive, offset, nVertex);

    //angka 1
    primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 7;
    gl.drawArrays(primitive, offset, nVertex);

    //angka 6
    primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 18;
    gl.drawArrays(primitive, offset, nVertex);

    //angka 6 bulat
    primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 8;
    gl.drawArrays(primitive, offset, nVertex);

    //angka 3
    primitive = gl.LINE_LOOP;
    offset += nVertex;
    nVertex = 15;
    gl.drawArrays(primitive, offset, nVertex);
  }
  function resizer() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var minimumSize = Math.min(gl.canvas.height, gl.canvas.width);
    gl.viewport(canvas.width / 2 - minimumSize / 2, canvas.height / 2 - minimumSize / 2, minimumSize, minimumSize);
    draw();
  }

  window.addEventListener('resize', resizer);

  resizer();
}
