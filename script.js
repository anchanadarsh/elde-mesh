$(document).ready(function () {
    var getParent = $('#mesh_material');
    var getParentBack = $('#mesh_material_back');
    var parentHeight = getParent.outerHeight();
    var parentWidth = getParent.outerWidth();
    var dotGap = 50; //in px
    
    var calcLoopX = Math.ceil(parentWidth / 50);
    var calcLoopY = Math.ceil(parentHeight / 50);

    for (var y = 0; y <= calcLoopY; y++) {
        for (var x = 0; x <= calcLoopX; x++) {
            getParentBack.append("<span class='dots' style='left:" + x*dotGap + "px;top:" + y*dotGap + "px'></span>");
            getParent.append("<span class='dots' style='left:" + x*dotGap + "px;top:" + y*dotGap + "px'></span>");
        }
    }
});
