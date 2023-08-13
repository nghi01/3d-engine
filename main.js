windows.ECS = {
    entities: [],
    components: {},
    systems: {}
};

ECS.canvas = document.getElementById("screen");
ECS.context = ECS.canvas.getContext("2d");
ECS.width = canvas.width;
ECS.height = canvas.height;

ECS.context.fillStyle = "#337cc4";
ECS.context.fillRect(0, 0, width, height);
