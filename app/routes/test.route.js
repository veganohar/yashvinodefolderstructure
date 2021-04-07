const controller = require("../controllers/test.controller");

module.exports = function(app){
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });


      app.get("/get",controller.testget);
      app.post("/post",controller.testpost);
      app.put("/put",controller.testput);
      app.delete("/delete",controller.testdelete);
      app.post("/databody",controller.dataBody);
      app.post("/dataparams/:name/:city",controller.dataparams);
      app.post("/dataquery",controller.dataquery);
      app.get("/testejs",controller.testejs);
      app.post('/dataForm',controller.dataForm);
      app.get('/ejsform',controller.ejsform);

      app.post("/api/clubs/createNewClub",controller.createNewClub)

}
