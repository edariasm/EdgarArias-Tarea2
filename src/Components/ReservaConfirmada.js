import React from 'react'

export const ReservaConfirmada = () => {
  return (
    <div>
        <h3>Reserva confirmada con éxito</h3>
        <p>Recuerde llegar temprano al venue para evitar aglomeraciones</p>
        <p>La entrada debe ser cancelada en la entrada del venue. Para los eventos "no-cover" solamente ingresar al venue</p>
        <p>Gracias por su preferencia!</p>
        <form action="/" method="GET">
        <button>Cerrar</button>
    </form>
    </div>
  )
}
