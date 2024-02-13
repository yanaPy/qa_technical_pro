var zoo = {
    goat: {
        name: "Goatty",
    },
    dog: {
        name: "Doggy",
        color: "black"
    },
    cat : {
        name: "Kitty",
        color: "red",
        breed: "Maine Coon"
    },
    getInfo(){
        info = "Zoo: \n"
        for (let key in this){
            if(typeof this[key] ==="object"){
                info +="\n\t" + key  +":";
            }
                    for(let property in this[key]){
                        info +="\n\t\t" + property  +": "+ this[key][property];
            }
        }
        console.log(info);

    }
}

zoo.getInfo();
zoo.security = {name: "Borys", voiceSupport: "Вы кто такие, я вас не звал"};
zoo.getInfo();
