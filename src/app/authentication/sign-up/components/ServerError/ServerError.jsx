import Modal from "../Modal";
import { CircleAlert } from "lucide-react";
import Button from "../../../components/Button";
import { useRouter } from "next/navigation";

const ServerError = ({ status, onClose }) => {
  const router = useRouter();

  return (
    <Modal isDialog>
      <div className="p-10 text-center space-y-4 width-[300px] font-bold">
        <div>
          <CircleAlert className="text-orange-500 mx-auto" size={40} />
        </div>
        {{
          409: (
            <div className="space-y-10">
              <div className="font-bold">
                <p>Email already registered, please log in instead</p>
              </div>
              <div>
                <Button
                  onClick={() => {
                    onClose();
                    router.push("/authentication/sign-in");
                  }}
                >
                  Go to Login
                </Button>
              </div>
            </div>
          ),
        }[status] || (
          <div className="space-y-10">
            <div className="font-bold">
              <p>Something went wrong, please try again later</p>
            </div>
            <div>
              <Button
                onClick={() => {
                  onClose();
                }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ServerError;
