export const Admin = () => {
    return (
      <>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Gestión de Usuarios
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Desde este panel, puedes administrar de manera eficiente los perfiles de usuario registrados en tu página. Edita información personal, asigna roles específicos y supervisa la actividad para garantizar una experiencia segura y personalizada para todos los usuarios. Mantén el control de la comunidad con herramientas avanzadas de administración.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Configuración General
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Personaliza y optimiza cada aspecto de tu página web desde esta sección. Configura opciones como el idioma, las notificaciones, los temas de diseño y otras preferencias clave que aseguren que tu plataforma se adapte perfectamente a las necesidades de tu audiencia.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Seguridad y Privacidad
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Protege tu página web con herramientas de seguridad avanzadas. Configura opciones de autenticación, supervisa intentos de acceso no autorizados y asegura la privacidad de los datos de tus usuarios. Aquí puedes gestionar todos los aspectos relacionados con la integridad de tu plataforma.
      </div>
    </div>
  </div>
</div>
      </>
    );
  };
  