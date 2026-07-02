import { useParams } from "react-router-dom";
import trainers from "../TrainersMock";

function TrainerDetails() {
  const { id } = useParams();

  const trainer = trainers.find(
    (t) => t.trainerId === parseInt(id)
  );

  if (!trainer) return <h3>Trainer Not Found</h3>;

  return (
    <div>
      <h2>{trainer.name}</h2>

      <p><b>Email:</b> {trainer.email}</p>

      <p><b>Phone:</b> {trainer.phone}</p>

      <p><b>Technology:</b> {trainer.technology}</p>

      <p><b>Skills:</b> {trainer.skills}</p>
    </div>
  );
}

export default TrainerDetails;