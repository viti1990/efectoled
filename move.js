window.addEventListener("load",function(){

        $(document).ready(function () {

            $(".carrusel__flecha-izq").click(function () {

                $(".bloque2").show()
                $(".carrusel").css("margin-left","-50%")
                $(".carrusel").css("transition","1.5s")


            })

            $(".carrusel__flecha-der").click(function () {

                $(".bloque2").hide()
                $(".bloque1").show()


            })

    var cantidad_productos = 1

            $(".slider-numero__cantidad").val(cantidad_productos)

                $(".slider-numero__resta").click(function () {
                    if (cantidad_productos >1){
                        cantidad_productos--
                        $(".slider-numero__cantidad").val(cantidad_productos)
                    }

              })

            $(".slider-numero__suma").click(function () {
                cantidad_productos++
                $(".slider-numero__cantidad").val(cantidad_productos)
            })











        })






})