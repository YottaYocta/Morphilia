///////////scene//////////////
var scene = new THREE.Scene();
{
    var near = 45;
    var far = 75;
    scene.fog = new THREE.Fog('lightskyblue', near, far)
}
scene.background = new THREE.Color('lightskyblue')
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
var canvas = document.querySelector('.container-div');
canvas.appendChild(renderer.domElement);
camera.position.z = 5
var Vals = [ -50, -45, -40, -35, -30, -25, -20, -15, 15, 20, 25, 30, 35, 40, 45, 50]
var ValsY = [ -40, -32, -24, -16, 0, 16, 24, 34, 40]
var ValsZ = [ -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30]
var Speeds = [3, 5, 7, 9, 11]
var shapes = []
var partVal = [-60, -45, 45 ,60]
///////////shapes//////////////
int = 4
var colors = [0xff1111, 0xff6666, 0x090393, 0xff0000]

var sphere_geo = new THREE.SphereGeometry(7, 1, 1);
var sphere_geo1 = new THREE.SphereGeometry(6, 4, 4);
var sphere_geo3 = new THREE.SphereGeometry(8, 6, 6);
var sphere_geo2 = new THREE.SphereGeometry(9, 8, 9);
var material = new THREE.MeshPhysicalMaterial({
    color: colors[1],
    flatShading: THREE.FlatShading,
    reflectivity: 1,
    clearcoat: 1,
    transparency: 1,


});
var material1 = new THREE.MeshPhysicalMaterial({
    color: colors[3],
    flatShading: THREE.FlatShading,
    reflectivity: 1,
    clearcoat: 1,
    transparency: 1,


});
var material2 = new THREE.MeshPhysicalMaterial({
    color: 'violet',
    flatShading: THREE.FlatShading,
    reflectivity: 1,
    clearcoat: 1,
    transparency: 1,


});
var material3 = new THREE.MeshPhysicalMaterial({
    color: 'green',
    flatShading: THREE.FlatShading,
    reflectivity: 1,
    clearcoat: 1,
    transparency: 1,


});
var material4 = new THREE.MeshPhysicalMaterial({
    color: 'white',
    flatShading: THREE.FlatShading,
    reflectivity: 1,
    clearcoat: 1,
    transparency: 1,
});
var knotGeo = new THREE.TorusKnotGeometry(10, 4, 50, 10)
var torGeo = new THREE.TorusGeometry(10, 3, 20, 20)
for (i = 0; i < 1; i++) {
    var knot = new THREE.Mesh(knotGeo, material3)
    var torus = new THREE.Mesh(torGeo, material4)
    scene.add(knot, torus)
    shapes.push(knot, torus)

}
for (i = 0; i < 17; i++) {
    
    var sph = new THREE.Mesh(sphere_geo2, material1);
    var sph2 = new THREE.Mesh(sphere_geo1, material1);
    var sph3 = new THREE.Mesh(sphere_geo, material);
    var sph4 = new THREE.Mesh(sphere_geo2, material);
    var sph5 = new THREE.Mesh(sphere_geo3, material2);

   
    
    scene.add(sph, sph2, sph3, sph4, sph5)
    shapes.push(sph, sph2, sph3, sph4, sph5)
    
}
for (const sph of shapes) {
    sph.position.x = Vals[Math.floor(Math.random() * Math.floor(16))] * 1.5
    sph.position.y = ValsY[Math.floor(Math.random() * Math.floor(9))] * 1.5
    sph.position.z = ValsZ[Math.floor(Math.random() * Math.floor(13))] * 1.5
    
}


///////////environment//////////////
var light = new THREE.PointLight(0xffffff, 1, 6000)
var light_2 = new THREE.PointLight(0xffffff, 1, 190)
var light_3 = new THREE.AmbientLight(0xffffff, 0.15)
light.position.set(100, 100, 100)
light_2.position.set(-100, -100, -100)
scene.add(light, light_2, light_3)
function onWindwoResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.innerHeight > window.innerWidth - 200){
        notif.classList.remove('clear')
        notif.classList.add('tall')
    } else if (window.innerHeight < window.innerWidth - 200){
        notif.classList.remove('tall')  
        notif.classList.add('clear')  

    }

}
var w = document.querySelector('.w-btn');
var a = document.querySelector('.a');
var s = document.querySelector('.s');
var d = document.querySelector('.d');
var up = document.querySelector('.upArr');
var left = document.querySelector('.left');
var down = document.querySelector('.down');
var right = document.querySelector('.right');
var asc = document.querySelector('.asc');
var de = document.querySelector('.upde');
var show = document.querySelector('.show');
var move = document.querySelector('.move');
var rotate = document.querySelector('.rotate');
var notif = document.querySelector('.notif');
var music = document.querySelector('.music');
var start = document.querySelector('.head');
var main = document.querySelector('main');
var footer = document.querySelector('.footer');
var mob = document.querySelector('.mob');

window.addEventListener('resize', onWindwoResize, false)
if (window.innerHeight > window.innerWidth - 200){
    notif.classList.remove('clear')
    notif.classList.add('tall')
} else if (window.innerHeight < window.innerWidth - 200){
    notif.classList.remove('tall')  
    notif.classList.add('clear')  

}

///////////functions//////////////
var rand = Math.floor(Math.random() * Math.floor(5)) * 0.0005
var rand2 = Math.floor(Math.random() * Math.floor(5)) * 0.0005
var fowardMove = false;
var backMove = false;
var leftMove = false;
var rightMove = false;
var upMove = false;
var downMove = false;
var roUp = false;
var roDown = false;
var roLeft = false;
var roRight = false;
var keypad = false;
function testKeypad() {
    if (keypad == false) {
        keypad = true        
    } else if (keypad == true) {
        keypad = false
    }
}
if (is_touch_device4() == false) {
    keypad = false
    show.addEventListener('click', testKeypad)
    start.addEventListener('click', function() {
        start.classList.add('clear')
        footer.classList.add('clear')
        main.classList.add('clear')
        show.classList.remove('clear')
        canvas.classList.remove('clear')
        animate();
        music.play()
        
    });
    
} else if(is_touch_device4() == true) {
    show.addEventListener('touchstart', testKeypad)
    keypad = true;
    start.addEventListener('touchstart', function() {
        start.classList.add('clear')
        footer.classList.add('clear')
        main.classList.add('clear')
        show.classList.remove('clear')
        canvas.classList.remove('clear')

        animate();
        music.play()
        
    });
    
}



w.addEventListener('mousedown', function() {
    fowardMove = true;
});
w.addEventListener('touchstart', function() {
    fowardMove = true;
});
w.addEventListener('mouseup', function() {
    fowardMove = false;
})
w.addEventListener('touchend', function() {
    fowardMove = false;
})
a.addEventListener('mousedown', function() {
    leftMove = true;
});
a.addEventListener('mouseup', function() {
    leftMove = false;
})
a.addEventListener('touchstart', function() {
    leftMove = true;
});
a.addEventListener('touchend', function() {
    leftMove = false;
})
s.addEventListener('mousedown', function() {
    backMove = true;
});
s.addEventListener('mouseup', function() {
    backMove = false;
})
s.addEventListener('touchstart', function() {
    backMove = true;
});
s.addEventListener('touchend', function() {
    backMove = false;
})
d.addEventListener('mousedown', function() {
    rightMove = true;
});
d.addEventListener('mouseup', function() {
    rightMove = false;
})
d.addEventListener('touchstart', function() {
    rightMove = true;
});
d.addEventListener('touchend', function() {
    rightMove = false;
})
up.addEventListener('mousedown', function() {
    roUp = true;
});
up.addEventListener('mouseup', function() {
    roUp = false;
})
up.addEventListener('touchstart', function() {
    roUp = true;
});
up.addEventListener('touchend', function() {
    roUp = false;
})
left.addEventListener('mousedown', function() {
    roLeft = true;
});
left.addEventListener('mouseup', function() {
    roLeft = false;
})
left.addEventListener('touchstart', function() {
    roLeft = true;
});
left.addEventListener('touchend', function() {
    roLeft = false;
})
down.addEventListener('mousedown', function() {
    roDown = true;
});
down.addEventListener('mouseup', function() {
    roDown = false;
})
down.addEventListener('touchstart', function() {
    roDown = true;
});
down.addEventListener('touchend', function() {
    roDown = false;
})
right.addEventListener('mousedown', function() {
    roRight= true;
});
right.addEventListener('mouseup', function() {
    roRight = false;
})
right.addEventListener('touchstart', function() {
    roRight= true;
});
right.addEventListener('touchend', function() {
    roRight = false;
})
asc.addEventListener('mousedown', function() {
    upMove = true;
})
asc.addEventListener('mouseup', function() {
    upMove = false;
})
asc.addEventListener('touchstart', function() {
    upMove = true;
})
asc.addEventListener('touchend', function() {
    upMove = false; 
})
de.addEventListener('mousedown', function() {
    downMove = true;
})
de.addEventListener('mouseup', function() {
    downMove = false;
})
de.addEventListener('touchstart', function() {
    downMove = true;
})
de.addEventListener('touchend', function() {
    downMove = false;
})
document.body.onkeydown = function(e){
    if(e.keyCode == 87){
        fowardMove = true;    
    } else if(e.keyCode == 83){
        backMove = true;
    } else if(e.keyCode == 65){
        leftMove = true;
    } else if(e.keyCode == 68){
        rightMove = true;
    } else if (e.keyCode == 38) {
        roUp = true;
    } else if (e.keyCode == 40) {
        roDown = true;
    } else if (e.keyCode == 37) {
        roLeft = true
    } else if (e.keyCode == 39) {
        roRight = true
    } else if (e.keyCode == 32) {
        upMove = true;
    } else if (e.keyCode == 16) {
        downMove = true;
    }
}
document.body.onkeyup = function(e){
    if(e.keyCode == 87){
        fowardMove = false;                
    } else if(e.keyCode == 83){
        backMove = false;
    } else if(e.keyCode == 65){
        leftMove = false;
    } else if(e.keyCode == 68){
        rightMove = false;
    } else if (e.keyCode == 38) {
        roUp = false;
    } else if (e.keyCode == 40) {
        roDown = false;
    } else if (e.keyCode == 37) {
        roLeft = false;
    } else if (e.keyCode == 39) {
        roRight = false;
    } else if (e.keyCode == 32) {
        upMove = false;
    } else if (e.keyCode == 16) {
        downMove = false;
    }
}

///////////rendering//////////////
function animate() {
    is_touch_device4();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (keypad == true) {
        mob.classList.remove('clear_mob')
        mob.classList.add('unclear')
    } else if (keypad == false) {
        mob.classList.add('clear_mob')
        mob.classList.remove('unclear')
    }
    
    
    for (const sph of shapes) {
        sph.rotation.x += rand
        sph.rotation.y += rand2
        sph.position.x += 0.02 * Math.random() + 0.01
        sph.position.y += 0.02 * Math.random() + 0.01
        sph.position.z += 0.02 * Math.random() + 0.01
        if (Math.abs(sph.position.x - camera.position.x) > 100) {
            sph.position.x = camera.position.x + partVal[Math.floor(Math.random() * Math.floor(4))] * 2
        } else if (Math.abs(sph.position.y - camera.position.y) > 100) {
            sph.position.y = camera.position.y + partVal[Math.floor(Math.random() * Math.floor(4))] * 2

        } else if (Math.abs(sph.position.z - camera.position.z) > 95) {
            sph.position.z = camera.position.z + partVal[Math.floor(Math.random() * Math.floor(4))] * 2

        }  

    } 
    if (fowardMove == true) {
        camera.translateZ(-0.2)
    } else if (backMove == true) {
        camera.translateZ( 0.2)
    } else if (leftMove == true) {
        camera.translateX( -0.2)
    } else if (rightMove == true) {
        camera.translateX( 0.2)
    } else if (upMove == true) {
        camera.translateY( 0.2)
    } else if (downMove == true) {
        camera.translateY( -0.2)
    } else if (roUp == true) {
        camera.rotateX(0.7 * Math.PI/180)
    } else if (roDown == true) {
        camera.rotateX(-0.7 * Math.PI/180)
    } else if (roLeft == true) {
        camera.rotateY(0.7 * Math.PI/180)
    } else if (roRight == true) {
        camera.rotateY(-0.7 * Math.PI/180)
    } 

}


///js///




music.addEventListener('ended', function() {
    music.play()
})
function is_touch_device4() {
    
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}

