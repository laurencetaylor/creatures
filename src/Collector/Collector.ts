class Collector {
  public position: [number, number] | null = null;

  public setPosition(x: number, y: number) {
    this.position = [x, y];
  }
}

export {Collector};
