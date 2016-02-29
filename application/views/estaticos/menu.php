
   <script src="js/script.js"></script><!--SCRIPT ERSONALIZADO-->
        <link rel="stylesheet" href="css/styl_admin.css"><!--ESTILOS-->

        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900' rel='stylesheet' type='text/css'><!--FUENTES-->
        <link rel="stylesheet" href="fonts/FontAwesome.otf"><!--FUENTES UIKIT-->
        <link rel="stylesheet" href="fonts/fontawesome-webfont.woff">
        <link rel="stylesheet" href="fonts/fontawesome-webfont.woff2">
        <link rel="stylesheet" href="fonts/fontawesome-webfont.ttf">


    <body>
        <div class="uk-container-center cnt" ng-controller="capsule"><!--CONTENEDOR GRAL-->
            <nav class="nv"><!--BARRA DE NAVEGACION-->
                <h1>panel de administración</h1>
                <ul>
                    <li>
                        <a onclick="<?php $this->session->sess_destroy();?>" href="<?php echo base_url(); ?>"><img src="img/cerrar.svg" class="iconav"/><span class="uk-visible-large">cerrrar sesión</span></a>
                    </li>
                </ul>
            </nav>
            <div class="uk-grid gri bug">
                <div class="mn uk-width-10-10 uk-width-small-3-10 uk-width-medium-2-10 uk-width-large-2-10 uk-grid-width-xlarge-1-10"><!--MENU GRAL-->
                    <div class="mn_t">menu
                        <div class="mndrop"><i class="uk-icon-bars drop"></i></div>
                    </div>
                    <nav class="cnt_m">
                        <ul>
                            <a ng-repeat="menu in data" ng-href="#/{{ menu.alias }} ">
                                <li >
                                    {{ menu.nombre }}
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div class="cntd uk-width-10-10 uk-width-small-7-10 uk-width-medium-8-10 uk-width-large-8-10 uk-grid-width-xlarge-9-10"><!--VISTAS-->
                    <div ng-view ><!--class="vista"-->
                    </div>
                </div>

                </div>
            </div>
        </div>
    </body>
</html>



