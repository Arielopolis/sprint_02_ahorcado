const $boton = document.querySelector('#botonPDF');
$boton.addEventListener('click', () => {
    window.open('assets/Ariel_Jacobi_prtfl.pdf', "VersiónPdf", "fullscreen=yes")

    // const $contenidoPdf = document.body;
    // html2pdf()
    //     .set({
    //         margin: 0.1,
    //         filename: 'Ariel_Jacobi_prtfl.pdf',
    //         image:{
    //             type: 'jpeg',
    //             quality: 0.98,
    //         },
    //         html2canvas:{
    //             scale: 3,
    //             letterRendering: true,
    //         },
    //         jsPDF:{
    //             unit:"in",
    //             format:"a4",
    //             orientation: 'portrait',
    //         }
    //     })
    //     .from($contenidoPdf)
    //     .save()
    //     .catch(err => console.log(err))
    //     .finally()
    //     .then(() => {
    //         alert('Documento generado con éxito')
    //     })

})