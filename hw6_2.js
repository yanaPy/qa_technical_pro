var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн",
    price(){
        var price=0;
        for(let key in this){
            if(typeof this[key] ==="string"){
                price+=+this[key].replace("грн","");
            }
        }
        return price;
    },
    minPrice(){
        var price=0;
        var finalPrice=0;
        for(let key in this){
            if(typeof this[key] ==="string"){
                price=+this[key].replace("грн","");
                if(price<finalPrice || finalPrice==0){
                    finalPrice=price;
                }
            }
        }
        return finalPrice;
    },
    maxPrice(){
        var price=0;
        var finalPrice=0;
        for(let key in this){
            if(typeof this[key] ==="string"){
                price=+this[key].replace("грн","");
                if(price>finalPrice){
                    finalPrice=price;
                }
            }
        }
        return finalPrice;
    }
};

console.log("Загальна вартість 'наданих послуг'", services.price());
console.log("Мінімальна вартість 'наданих послуг'", services.minPrice());
console.log("Максимальна вартість 'наданих послуг'", services.maxPrice());

services['Розбити скло'] = "200 грн";
services['Чай'] = "30 грн";

console.log("---------");
console.log("Загальна вартість 'наданих послуг'", services.price());
console.log("Мінімальна вартість 'наданих послуг'", services.minPrice());
console.log("Максимальна вартість 'наданих послуг'", services.maxPrice());
