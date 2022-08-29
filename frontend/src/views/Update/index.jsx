import AdminForm from "../../components/AdminForm";

/**
 * This function returns a div that contains an AdminForm component with a type prop of update.
 * @returns A function that returns a div with an AdminForm component.
 */
function index() {
  return (
    <div>
      <AdminForm type="update" />
    </div>
  );
}

export default index;
