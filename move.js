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















        })






})