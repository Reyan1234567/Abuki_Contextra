import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface updateForm {
  paint_id: "";
  name: "";
  brand: "";
  color: "";
  notes: "";
}

const InventoryForm = () => {
  const [isNew, setIsNew] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  const [form, setform] = useState({
    paint_id: "",
    name: "",
    brand: "",
    color: "",
    notes: "",
  });

  const { id } = params;

  const updateForm = async() => {
    try {
      await axios.put(`http://localhost:9000/api/inventory/${id}`, form);
    } catch (err) {
      console.log(err);
    }
    navigate("/inventory");
  };

  const createForm = async () => {
    try {
      await axios.post("http://localhost:9000/api/inventory", form);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const checkForParams = () => {
      if (!id) {
        setIsNew(true);
        return isNew;
      } else {
        setIsNew(false);
        return isNew;
      }
    };
    checkForParams();
  }, [id,isNew]);

  useEffect(() => {
    const updateFormview = async () => {
      if (isNew) {
        try {
          const response = await axios.get(
            `http://localhost:9000/api/inventory/${id}`
          );
          setform(response.data);
        } catch (err) {
          console.log(err);
        }
      } else return;
    };
    updateFormview();
  }, [id,isNew]);
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="paint_id">
          Paint id
        </label>
        <input
          onChange={(event) =>
            setform({ ...form, paint_id: event.target.value })
          }
          value={form.paint_id}
          type="text"
          id="paint_id"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(event) => setform({ ...form, name: event.target.value })}
          value={form.name}
          type="text"
          id="name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="brand">
          Brand
        </label>
        <input
          onChange={(event) => setform({ ...form, brand: event.target.value })}
          value={form.brand}
          type="text"
          id="brand"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="color">
          Color
        </label>
        <input
          onChange={(event) => setform({ ...form, color: event.target.value })}
          value={form.color}
          type="text"
          id="color"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="notes">
          Notes
        </label>
        <input
          onChange={(event) => setform({ ...form, notes: event.target.value })}
          value={form.notes}
          type="comment"
          id="notes"
        />
      </div>

      {isNew ? (
        <button onClick={createForm} type="submit" className="btn btn-primary">
          Submit
        </button>
      ) : (
        <button onClick={updateForm} type="submit" className="btn btn-primary">
          Submit
        </button>
      )}
    </form>
  );
};

export default InventoryForm;
