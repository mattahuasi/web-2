$("#enviar").click(function () {
  Swal.fire({
    title: "Esta seguro(a)?",
    text: "No se podrá revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminar!",
        text: "Su archivo a sido eliminado.",
        icon: "success",
        cancelButtonText: "Cancelar",
      });
    }
  });
});
