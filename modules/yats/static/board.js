        $(function () {
            var kanbanCol = $('.panel-body');
            kanbanCol.css('max-height', (window.innerHeight - 150) + 'px');

            var kanbanColCount = parseInt(kanbanCol.length);
            $('.container-fluid').css('min-width', (kanbanColCount * 350) + 'px');

            draggableInit();

            $('.panel-heading').click(function() {
                //var $panelBody = $(this).parent().children('.panel-body');
                //$panelBody.slideToggle();
            });
        });

        function draggableInit() {
            var sourceId;

            $('[draggable=true]').bind('dragstart', function (event) {
                sourceId = $(this).parent().attr('id');
                node = event.target
                while (node.nodeName != 'ARTICLE') {
                  node = node.parentNode
                }
                event.originalEvent.dataTransfer.setData("text/plain", node.getAttribute('id'));
            });

            $('.panel-body').bind('dragover', function (event) {
                event.preventDefault();
            });

            $('.panel-body').bind('drop', function (event) {
                var children = $(this).children();
                var targetId = children.attr('id');

                /*
                console.log(targetId)
                console.log(sourceId.replace('list', ''))
                console.log(edges[sourceId.replace('list', '')])
                */

                var elementId = event.originalEvent.dataTransfer.getData("text/plain");
                availListIDs = edges[sourceId.replace('list', '')];
                newListID = parseInt(targetId.replace('list', ''));
                if ( availListIDs.indexOf(newListID) > -1 ) {
                  if (sourceId && sourceId != targetId) {

                      $('#processing-modal').modal('toggle'); //before post

                      // Post data
                      setTimeout(function () {
                          var element = document.getElementById(elementId);
                          children.prepend(element);
                          $('#processing-modal').modal('toggle'); // after post
                      }, 1000);

                      //var element = document.getElementById(elementId);
                      //children.prepend(element);
                  }
                } else {
                  showalert('State not allowed for ticket #' + elementId.replace('item', ''), 'alert-error')
                }

                event.preventDefault();
            });
        }

        function showalert(message, alerttype) {
            $('#alert_placeholder').append('<div id="alertdiv" class="alert ' +  alerttype + '"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>');
            setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
                $("#alertdiv").remove();
            }, 5000);
        }
