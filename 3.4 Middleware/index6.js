// import express from "express"; 

// create module for middleware 

export const cartValidation = {
    checkWaiters : function(req,res,next){
        var cart = req.session.cart;
        if(!cart) return next();
        if (cart.some(function(i){return i.product.requireWaiver})){
            if (!cart.warning) cart.warnings = [];
            cart.warnings.push('One or more of your selected '+ 'tours requires a walver');
        }
        next();
    },
    checkGuestCounts: function(req,res,next){
        var cart = req.session.cart;
        if (!cart) return next();
        if(cart.some(function(item){return item.guests>item.product.maximumGests;})){
            if (!cart.error) cart.errors =[];
            cart.error.push('One or more of your selected tours '+ 'cannot accommodate the number of guests you '+' have selected');
        }
        next();
    }
}