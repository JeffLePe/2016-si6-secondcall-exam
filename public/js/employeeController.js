(function () {
    "use strict"

    function getEmployeeById(id) {
        $.ajax({
            method: "GET",
            url: "/api/employees/" + id
        })
        .done(funcionario => {
            $("#name").html(funcionario.name)
            $("#email").html(funcionario.email)
            $("#jobTitle").html(funcionario.jobTitle)
            $("#age").html(funcionario.idade)
            $("#photo").attr('src', funcionario.photo)
        });
    }

    $("form").on("submit", event => {
        var id = $("#employeeId").val()
        getEmployeeById(id)
        return false
    })
    
})()