

$(function () {
    $("#addContactPopup").hide();
    $(document).on("click", "#addNew", function () {
        $("#addContactPopup").dialog({
            minWidth: 400,
            width: 500,
            maxWidth: 600,
            title: "Add New Contact",
            buttons: [
                {
                    text: "Add",
                    click: function () {
                        var user = {
                            "Name": $("#nameText").val(),
                            "Address": $("#addressText").val(),
                            "Email": $("#emailText").val()
                        };
                        contactAdd(user);
                        $("#nameText").val('');
                        $("#addressText").val('');
                        $("#emailText").val('')
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Cancel",
                    click: function () {
                        $("#nameText").val('');
                        $("#addressText").val('');
                        $("#emailText").val('')
                        $(this).dialog("close");
                    }
                }]
        });
        function calculateGravatar(emailAddress) {
            var grav = "";
            var email = emailAddress.toLowerCase().trim();
            var hash = CryptoJS.MD5(email);
            grav = "http://www.gravatar.com/avatar/" + hash + ".jpg";
            return grav;
        }

        function contactAdd(data) {
            var el = $('#contactList');
            var gravatar = calculateGravatar(data.Email);
            el.prepend(
            '<li style="display:inline-block">' +
                '<div style="border: 1px solid #F0F0F0; margin-bottom:5px; padding:10px; width:400px;">' +
                    '<div>Name: ' + data.Name + '</div>' +
                    '<div>Address: ' + data.Address + '</div>' +
                    '<div>Email: ' + data.Email + '</div>' +
                    '<div><img src=' + gravatar + ' alt="gravatar" /> </div>' +
                '</div>' +
            '</li>');
        }

    });



});