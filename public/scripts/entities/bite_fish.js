class BiteFish extends Fish{
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
  }

  onClick(event) {
    // this.kill();
    console.log("Click click")
    let closeByFish = this.tank.getProximateDenizens(this.position, 200);
    console.log("Before filter:", closeByFish);

    closeByFish = closeByFish.filter((things) => {return !(things instanceof BiteFish) && !(things instanceof Starter)});

    console.log("After filter:", closeByFish);

    if (closeByFish.length > 0) {
      closeByFish[0].kill();
      console.log("After kill:", closeByFish);
    }


  }
}
