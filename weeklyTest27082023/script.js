  const canvas = document.getElementById("board");
  const deleteButton = document.getElementById("deleteButton");
  const undoButton = document.getElementById("undoButton");
  const context = canvas.getContext("2d");
  
  let drawing = false;
  let objects = [];
  let tempPath = null;

  canvas.addEventListener("mousedown", drawLine);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDeawLine);
  canvas.addEventListener("mouseout", stopDeawLine);

  deleteButton.addEventListener("click", clearWhiteboard);
  undoButton.addEventListener("click", handleUndo);

  function drawLine(e) {
    drawing = true;
    tempPath = [{ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop }];
  }

  function draw(e) {
    if (!drawing) return;
    context.lineWidth = 3;
    context.lineCap = "round";
    context.strokeStyle = "black";

    tempPath.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop });

    context.clearRect(0, 0, canvas.width, canvas.height);
    redrawCanvas();
  }

  function stopDeawLine() {
    if (!drawing) return;
    drawing = false;
    if (tempPath.length > 1) {
      addObjectToCanvas(tempPath);
    }
    tempPath = null;
  }

  function clearWhiteboard() {
    objects = [];
    redrawCanvas();
  }

  function handleUndo() {
    objects.pop(); 
    redrawCanvas();
  }

  function redrawCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const obj of objects) {
      context.beginPath();
      context.moveTo(obj.path[0].x, obj.path[0].y);
      for (const point of obj.path) {
        context.lineTo(point.x, point.y);
      }
      context.stroke();
    }
  }

  function addObjectToCanvas(path) {
    objects.push({ path });
    redrawCanvas();
  }