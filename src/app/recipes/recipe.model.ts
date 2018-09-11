export class recipe{
  public Name:string;
  public Description:string;
  public imagePath:string;

  constructor(name:string,desc:string, imagepath:string)
  {
    this.Name=name;
    this.Description=desc;
    this.imagePath=imagepath;
  }
}
