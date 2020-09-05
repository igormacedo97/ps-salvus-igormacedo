const patients = [
  {
    id: 1,
    name: "Igor Macêdo",
    idade: 22,
    sexo: "M",
  },
];

module.exports = {
  index(req, res) {
    res.send({ patients });
  },

  show(req, res) {
    const patient = patients.find((r) => r.id === Number(req.params.id));
    if (patient) {
      res.send(patient);
    } else {
      res.sendStatus(404);
    }
  },

  create(req, res) {
    const patient = req.body;
    patient.id = patients.length + 1;
    patients.push(patient);
    res.send(patient);
  },

  update(req, res) {
    const patientIndex = patients.findIndex(
      (r) => r.id === Number(req.params.id)
    );
    if (patientIndex === -1) {
      res.sendStatus(404);
    } else {
      patients[patientIndex] = {
        ...patients[patientIndex],
        ...req.body,
        id: patients[patientIndex].id,
      };
      // patients[patientIndex].name = req.body.name;
      // patients[patientIndex].idade = req.body.idade;
      // patients[patientIndex].sexo = req.body.sexo;
      res.send(patients[patientIndex]);
    }
  },

  destroy(req, res) {
    const patientIndex = patients.findIndex(
      (r) => r.id === Number(req.params.id)
    );
    if (patientIndex === -1) {
      res.sendStatus(404);
    } else {
      const deletedPatients = patients.splice(patientIndex, 1);
      res.send(deletedPatients[0]);
    }
  },
};
