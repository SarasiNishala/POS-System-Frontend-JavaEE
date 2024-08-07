const itemForm = document.getElementById("form-item")

studentForm.addEventListener('save-button', (event) => {
    event.preventDefault();

    let namef = document.getElementById("itemName").value;
    let codef = document.getElementById("itemCode").value;
    let sizef = document.getElementById("itemSize").value;
    let pricef = document.getElementById("price").value;
    let qtyf = document.getElementById("quantity").value;


    const ItemData = {
        itemName:namef,
        itemCode:codef, 
        itemSize:sizef, 
        price:pricef,
        qty:qtyf
    };

    console.log(ItemData);

    //create Json
     const itemjson = JSON.stringify(ItemData)
     console.log(itemjson)

    $.ajax({
        url:"http://localhost:8080/Pos_System_NIKE_war_exploded/item",
        type:"POST",
        data:itemjson,
        headers:{"Content-Type":"application/json"},
        success:(res) =>{
            console.log(JSON.stringify(res));
        },
        error:(res) =>{
            console.error(res)
        }
    })
});