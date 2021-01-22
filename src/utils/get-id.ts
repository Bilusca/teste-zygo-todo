import { parseInt } from "lodash";

export default function getId(url: string | undefined): number | undefined {
  const id = url?.split("http://todo-backend-express.herokuapp.com/")[1];

  if (!id) {
    return undefined;
  }

  return parseInt(id);
}
