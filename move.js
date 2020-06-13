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







            $(".slider-numero__cantidad").blur(function(){
                cantidad_productos = $(this).val()
            })



            var edad = '';
            var color = '';
            var dia = '';


                $(".item1__btn").click(function(){
                    edad = $(".item1__input").val();

                    if(edad != ''){
                       $(".datos").hide()
                       $(".item1").slideUp()
                       $(".item2").show()
                    }
                    else{

                        $(".datos").html("ESCRIBE ALGO CANELO")
                    }



                })


            $(".item2__btn").click(function(){
                color = $(".item2__input").val();
                if(color != ''){
                    $(".datos").hide()
                    $(".item2").slideUp()
                   $(".item4").show()
                }

                else{

                    $(".datos").html("ESCRIBE ALGO CANELO")
                    $(".datos").show()
                }


            })

            $(".siguiente").click(function () {
                $(".item3").show()
                $(".item4").slideUp()
                $(".enviartodo").show()
            })

            $("form").submit(function(e){
                e.preventDefault()
                dia = $(".item3__input").val();

                if(dia != ''){
                    $(".datos").hide;

                      var datos=$(".formu").serialize()

    console.log(datos)


                    $(".datos").html(`
               <p>el numero es ${edad}</p>
              <p>el color es  ${color}</p>
               <p>el dia es ${dia}</p>
            
            
            `)

                    $(".datos").html(datos)
                $(".datos").show()


                    $.ajax({
                        type:'POST',
                        url:'https://reqres.in/api/users',
                        data:datos,
                        success:function(response){
                            console.log(response);

                            setTimeout(function(){
                                $(".datos").append('ENVIO CON EXITO')


                            },3000)


                        },


                        error:function () {
                            alert("hubo un error")
                        }

                    })


                }

                else{
                    $(".datos").html("ESCRIBE ALGO CANELO")
                    $(".datos").show()
                }



            })


/*

            $( "form" ).on( "submit", function( event ) {
                event.preventDefault();
                var resultados = $(this).serialize()
                console.log(resultados);
            });

*/
        })






})