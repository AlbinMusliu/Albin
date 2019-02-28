
var butoni= document.getElementById("butoni")
var inputi= document.getElementById("inputi")
var drag= document.getElementById("drag")
var drag1= document.getElementById("drag1")
var drag2= document.getElementById("drag2")
var drag3= document.getElementById("drag3")
var but= document.getElementById("btn")




$( function() {
 
    var $gallery = $( "#gallery" ),
      $trash = $( "#trash" );
 
   
    $( "li", $gallery ).draggable({
      cancel: "a.ui-icon", 
      revert: "invalid", 
      containment: "document",
      helper: "clone",
      cursor: "move"
    });
 
    
    $trash.droppable({
      accept: "#gallery > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"
      },
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
      }
    });
 
 
    $gallery.droppable({
      accept: "#trash li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        recycleImage( ui.draggable );
      }
    });
 
    
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
 
        $item.find( "a.ui-icon-plusthick" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "150px" })
            .find( "img" )
              .animate({ height: "180px" });
        });
      });
    }
 
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Add to chart' class='ui-icon ui-icon-plusthick'>Delete image</a>";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "200px")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "250px" )
          .end()
          .appendTo( $gallery )
          .fadeIn();
      });
    }
 
   
    function viewLargerImage( $link ) {
      var src = $link.attr( "href" ),
        title = $link.siblings( "img" ).attr( "alt" ),
        $modal = $( "img[src$='" + src + "']" );
 
      if ( $modal.length ) {
        $modal.dialog( "open" );
      } else {
        var img = $( "<img alt='" + title + "' width='500' height='350' style='display: none; padding: 8px;' />" )
          .attr( "src", src ).appendTo( "body" );
        setTimeout(function() {
          img.dialog({
            title: title,
            width: 400,
            modal: true
          });
        }, 1 );
      }
    }
 
    // Resolve the icons behavior with event delegation
    $( "ul.gallery > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plusthick" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }
 
      return false;
    });
  } );



$("#drag").draggable();
$("#drag1").draggable();
$("#drag2").draggable();
$("#drag3").draggable();



$("#read").droppable({
	drop: function(){
		$("#read").css("background-color", "#deb887")
	}
});

$("#read1").droppable({
	drop: function(){
		$("#read1").css("background-color", "#deb887")
	}
});


$("#read2").droppable({
	drop: function(){
		$("#read2").css("background-color", "#deb887")
	}
});

$("#read").droppable({
	drop: function(){
		$("#read").css("background-color", "#deb887")
		$("#drag").css("width", "100px")
		$("#pic").css("width", "100px")
		$("#pic").css("height", "50px")
		$("#drag").css("height", "100px")

	}
		
});


$("#read1").droppable({
	drop: function(){
		$("#read1").css("background-color", "#deb887")
		$("#drag1").css("width", "100px")
		$("#pic1").css("width", "100px")
		$("#pic1").css("height", "50px")
		$("#drag1").css("height", "100px")
	}
		
});


$("#read2").droppable({
	drop: function(){
		$("#read2").css("background-color", "#deb887")
		$("#drag2").css("width", "100px")
		$("#pic2").css("width", "100px")
		$("#pic2").css("height", "50px")
		$("#drag2").css("height", "100px")
	}
		
});

$("#read3").droppable({
	drop: function(){
		$("#read3").css("background-color", "#deb887")
		$("#drag3").css("width", "100px")
		$("#pic3").css("width", "100px")
		$("#pic3").css("height", "50px")
		$("#drag3").css("height", "100px")
	}
		
});






