var App = function(){
  var inicio = '#inicio';
  var presupuesto = '#presupuestos';
  var navegacion = '.navegacion';

  var comp_inicio = 'componentes/inicio.html';
  var comp_presupuesto = 'componentes/presupuesto.html';
  var comp_menu = 'componentes/menu.html';

    var initComponente = function(selector, componente, callback){
        $(selector).load(componente, callback);
    };

    var refresh = function(){
        $('[data-role="page"]').trigger('create');
    }

    this.refreshNavegacion = function(){
        var pagina = $(':mobile-pagecontainer').pagecontainer('getActivePage').attr( 'id' );

        $('[data-role="navbar"] a').removeClass('ui-btn-active');
        $('a[href="#' + pagina + '"]').addClass('ui-btn-active');
    };

    this.init = function(){
        initComponente(inicio, comp_inicio, function () {
            initComponente(navegacion, comp_menu, function(){
                refresh();
            });
        });

        initComponente(presupuesto, comp_presupuesto, function () {
            initComponente(navegacion, comp_menu, function(){
                refresh();
            });
        });
    };
};

$(document).on('pagechange', function(){
   var app = new App();
   app.refreshNavegacion();
});

$(document).on('pagebeforeshow', function(){

    var app = new App();
    app.init();

    /* $('#inicio').load('componentes/inicio.html',function(){

        $('.navegacion').load('componentes/menu.html', function(){
            $('[data-role="page"]').trigger('create');
        });

        $('[data-role="page"]').trigger('create');
    });

    $('#presupuestos').load('componentes/presupuesto.html',function(){
       $('[data-role="pague"]').trigger('create');
    });*/

});