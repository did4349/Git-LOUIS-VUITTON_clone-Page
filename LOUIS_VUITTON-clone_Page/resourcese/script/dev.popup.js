class PopUp{
    static attachEventPopUp = ()=>{
        PopUp.getElementPopUpClose().addEventListener('click',()=>{
            PopUp.hide();
        });
    }


    static getElementPopUp = ()=>{
        return window.document.body.querySelector('[rel="js_pop-up"]');
    }
    static getElementPopUpClose = ()=>{
        return PopUp.getElementPopUp().querySelector("div.pop-item.close");
    }



    static hide = ()=>{
        if(PopUp.getElementPopUp().classList.contains('visible')){
            PopUp.getElementPopUp().classList.remove('visible')
        }
    }

}