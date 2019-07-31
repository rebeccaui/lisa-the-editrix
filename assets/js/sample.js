jQuery.noConflict();
jQuery(document).ready(function() {
	var kid_name = jQuery('h1#main-name').html();
    console.log(kid_name);
    jQuery('.kid_name_sidebar').html(kid_name);

    var boneCancerCategory = document.getElementsByClassName('Bone-Cancer');
    var bloodCancerCategory = document.getElementsByClassName('Blood-Cancer');
    var brainCancerCategory = document.getElementsByClassName('Brain-Cancer');
    var eyeCancerCategory = document.getElementsByClassName('Eye-Cancer');
    var softTissueCancerCategory = document.getElementsByClassName('Soft-Tissue-Cancer');
    var solidTumorsCategory = document.getElementsByClassName('Solid-Tumors');

    var typeBone;
    var typeBlood;
    var typeBrain;
    var typeEye;
    var typeSoftTissue;
    var typeSolidTumors;

    if(boneCancerCategory.length > 0){
        typeBone = boneCancerCategory[0].id.replace(/-/g, " ");
        console.log('Category: ' + typeBone);
        console.log(typeBone);
        jQuery('.kid_category_sidebar').html('Bone Cancer');
        jQuery('.kid_type_sidebar').html(typeBone);
    } else if(bloodCancerCategory.length > 0) {
        typeBlood = bloodCancerCategory[0].id.replace(/-/g, " ");
        console.log('Category: Blood-Cancer found');
        console.log(typeBlood);
        jQuery('.kid_category_sidebar').html('Blood Cancer');
        jQuery('.kid_type_sidebar').html(typeBlood);
    } else if(brainCancerCategory.length > 0) {
        typeBrain = brainCancerCategory[0].id.replace(/-/g, " ");
        console.log('Category: Brain-Cancer found');
        console.log(typeBrain);
        jQuery('.kid_category_sidebar').html('Brain Cancer');
        jQuery('.kid_type_sidebar').html(typeBrain);
    } else if(eyeCancerCategory.length > 0) {
        typeEye = eyeCancerCategory[0].id.replace(/-/g, " ");
        console.log('Category: Eye-Cancer found');
        console.log(typeEye);
        jQuery('.kid_category_sidebar').html('Eye Cancer');
        jQuery('.kid_type_sidebar').html(typeEye);
    } else if(softTissueCancerCategory.length > 0) {
        typeSoftTissue = softTissueCancerCategory[0].id.replace(/-/g, " ");
        console.log('Category: Soft-Tissue-Cancer found');
        console.log(typeSoftTissue);
        jQuery('.kid_category_sidebar').html('Soft Tissue Cancer');
        jQuery('.kid_type_sidebar').html(typeSoftTissue);
    } else if(solidTumorsCategory.length > 0) {
        typeSolidTumors = solidTumorsCategory[0].id.replace(/-/g, " ");
        console.log('Category: ' + typeSolidTumors);
        console.log(typeSolidTumors);
        jQuery('.kid_category_sidebar').html('Solid Tumors');
        jQuery('.kid_type_sidebar').html(typeSolidTumors);
    } else {
    console.log('Category not found');
    }

    var status;
    var surviving = document.getElementsByClassName('category-surviving');
    var deceased = document.getElementsByClassName ('category-deceased');

    if(surviving.length > 0){
        console.log('Status: Surviving');
    } else if(deceased.length > 0) {
        console.log('Status: Deceased');
    } else {
        console.log('Status: Not Found');
    }
});