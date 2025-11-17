export class orderValidator{
   
    validate({userEmail, courseId, basePrice,
}){
    if (!userEmail || !userEmail.includes("@")) {
      throw new Error("Email inválido");
    }
    if (!courseId) {
      throw new Error("courseId requerido");
    };
    if (typeof basePrice !== "number")
    };
}