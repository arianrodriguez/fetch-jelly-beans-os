class BeanEntity {
  flavorName: string;
  ingredients: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
  image: string;
  description: string;

  constructor(flavorName = "", ingredients =  "",
              glutenFree = false, sugarFree = false,
              seasonal = false, image = "", description = "", kosher = false){
    this.flavorName = flavorName;
    this.ingredients = ingredients;
    this.glutenFree = glutenFree;
    this.sugarFree = sugarFree;
    this.seasonal = seasonal;
    this.image = image;
    this.description = description;
    this.kosher = kosher;
  }
}

export default BeanEntity;
