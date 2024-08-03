import styles from "./CategoryList.module.css";
import Loader from "../modules/Loader";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "../../services/admin";

function CategoryList() {
    const { data, isFetching, refetch } = useQuery(["get-categories"], getCategory);
    const { mutate } = useMutation(deleteCategory);

    const deleteHandler = (id) => {
        mutate(id, {
            onSuccess: () => {
                refetch();
            },
            onError: (error) => {
                console.error("Error deleting category:", error);
            },
        });
    }


    return (
        <div className={styles.list}>
            {isFetching ? <Loader /> : data.data.map((i) => <div key={i._id}>
                <img src={`${i.icon}.svg`} />
                <h5>{i.name}</h5>
                <p>slug:{i.slug}</p>
                <button onClick={() => deleteHandler(i._id)}>حذف</button>
            </div>)}
        </div>
    );
}

export default CategoryList