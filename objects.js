const obj = {
    name: "Mihai",
    greet: function() {
        //console.log("Hello, " + this.name)
        console.log(`Hello, ${this.name}`)
    }
}

obj.greet();