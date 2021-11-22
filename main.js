leftEyeX = 0
leftEyeY = 0
rightEyeX = 0
rightEyeY = 0

function preload() {
    glasses = loadImage("https://i.postimg.cc/3N7Md0ZW/glasses.png")
    wig = loadImage("https://i.postimg.cc/MKhjFyqh/Pik-Png-com-wig-png-1801841.png")
    necklace = loadImage("https://i.postimg.cc/nrF6ZjZx/toppng-com-choker-png-black-choker-necklace-transparent-750x337.png")
}

    function setup() {
        C1 = createCanvas(500, 500)
        C1.center()
        v1 = createCapture(VIDEO)
        v1.size(500, 500)
        v1.hide()
        pn = ml5.poseNet(v1, modelLoaded)
        pn.on('pose', gotPoses)
    }

    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results)
            console.log("leftEye" + results[0].pose.leftEye.x)
            console.log("leftEye" + results[0].pose.leftEye.y)
            console.log("rightEye" + results[0].pose.rightEye.x)
            console.log("rightEye" + results[0].pose.rightEye.y)
            leftEyeX = results[0].pose.leftEye.x
            leftEyeY = results[0].pose.leftEye.y
            rightEyeX = results[0].pose.rightEye.x
            rightEyeY = results[0].pose.rightEye.y
        }
    }

    function modelLoaded() {
        console.log("posenet loaded")
    }

    function Take_Snap() {
        save("myFilter.png")
    }

    function draw() {
        image(v1, 0, 0, 500, 500)
        image(glasses, rightEyeX - 35, rightEyeY - 25, 150, 70)
        image(wig, rightEyeX - 70, rightEyeY - 170, 220, 250)
        image(necklace, rightEyeX-5, rightEyeY + 140, 100, 50)
    }