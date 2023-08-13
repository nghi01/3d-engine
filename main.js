window.ECS = {
    entities: [],
    components: {},
    systems: {}
};

ECS.$canvas = document.getElementById("screen");
ECS.context = ECS.$canvas.getContext("2d");
ECS.width = ECS.$canvas.width;
ECS.height = ECS.$canvas.height;

ECS.context.fillStyle = "#337cc4";
ECS.context.fillRect(0, 0, ECS.width, ECS.height);