interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    profile: string;
}

interface FormProps {
    formData: FormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Test: React.FC<FormProps> = ({ formData }) => {
    return (
      <div className="m-20 w-[600px]">
        <div style={{ position: "relative" }}>
          <canvas
            style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
          ></canvas>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 595.28 841.89"
            style={{ direction: "ltr" }}
            className="document-preview"
          >
            <rect fill="white" height="100%" width="100%"></rect>
            <path
              fill="#EEF1F2"
              d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,841.89 C 200,841.89,200,841.89,200,841.89 L 0,841.89 C 0,841.89,0,841.89,0,841.89 L 0,0 C 0,0,0,0,0,0 Z"
            ></path>
            <path
              fill="#395a86"
              d="M 0,0 L 200,0 C 200,0,200,0,200,0 L 200,76.25 C 200,76.25,200,76.25,200,76.25 L 0,76.25 C 0,76.25,0,76.25,0,76.25 L 0,0 C 0,0,0,0,0,0 Z"
            ></path>

            <text
              fill="white"
              fontWeight="bold"
              fontStyle="normal"
              fontSize="15px"
              fontFamily="LiberationSans"
              y="45.1875"
              x="69.168701171875"
            >
              {formData.firstName}
            </text>
            <text
              fill="white"
              fontWeight="bold"
              fontStyle="normal"
              fontSize="15px"
              fontFamily="LiberationSans"
              y="65.8125"
              x="69.168701171875"
            >
              {formData.lastName}
            </text>
            <path
              fill="#395a86"
              d="M 0,74.25 L 200,74.25 C 200,74.25,200,74.25,200,74.25 L 200,114.25 C 200,114.25,200,114.25,200,114.25 C 140,142.25,60,142.25,0,114.25 C 0,114.25,0,114.25,0,114.25 L 0,74.25 C 0,74.25,0,74.25,0,74.25 Z"
            ></path>
            <path
              fill="#FFFFFF"
              d="M 100,81.25 L 100,81.25 C 135.88,81.25,165,110.37,165,146.25 L 165,146.25 C 165,182.13,135.88,211.25,100,211.25 L 100,211.25 C 64.12,211.25,35,182.13,35,146.25 L 35,146.25 C 35,110.37,64.12,81.25,100,81.25 Z"
            ></path>
            <clipPath id="0d085166-4579-422b-8fc1-1221ecbdf86e">
              <path
                d="M 100,86.25 L 100,86.25 C 133.12,86.25,160,113.13,160,146.25 L 160,146.25 C 160,179.37,133.12,206.25,100,206.25 L 100,206.25 C 66.88,206.25,40,179.37,40,146.25 L 40,146.25 C 40,113.13,66.88,86.25,100,86.25 Z"
              ></path>
            </clipPath>
            <path
              fill="#FFFFFF"
              d="M 100,86.25 L 100,86.25 C 133.12,86.25,160,113.13,160,146.25 L 160,146.25 C 160,179.37,133.12,206.25,100,206.25 L 100,206.25 C 66.88,206.25,40,179.37,40,146.25 L 40,146.25 C 40,113.13,66.88,86.25,100,86.25 Z"
            ></path>
            <svg y="226.25" x="15" id="personalDetails"></svg>
            <text
              fill="#395a86"
              fontWeight="normal"
              fontStyle="normal"
              fontSize="18px"
              fontFamily="LiberationSans"
              y="244.475"
              x="15"
            >
              Informations
            </text>
            <text
              fill="#395a86"
              fontWeight="normal"
              fontStyle="normal"
              fontSize="18px"
              fontFamily="LiberationSans"
              y="269.225"
              x="15"
            >
              personnelles
            </text>
            <path
              fill="#c8c8c8"
              d="M 15,279.75 L 185,279.75 C 185,279.75,185,279.75,185,279.75 L 185,280.25 C 185,280.25,185,280.25,185,280.25 L 15,280.25 C 15,280.25,15,280.25,15,280.25 L 15,279.75 C 15,279.75,15,279.75,15,279.75 Z"
            ></path>
            <svg y="290.25" x="15"></svg>
            <image
              imageRendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIiB3aWR0aD0iNDQ4IiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTIyNCAyNTZjNzAuNyAwIDEyOC01Ny4zIDEyOC0xMjhTMjk0LjcgMCAyMjQgMCA5NiA1Ny4zIDk2IDEyOHM1Ny4zIDEyOCAxMjggMTI4em04OS42IDMyaC0xNi43Yy0yMi4yIDEwLjItNDYuOSAxNi03Mi45IDE2cy01MC42LTUuOC03Mi45LTE2aC0xNi43QzYwLjIgMjg4IDAgMzQ4LjIgMCA0MjIuNFY0NjRjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4di00MS42YzAtNzQuMi02MC4yLTEzNC40LTEzNC40LTEzNC40eiI+PC9wYXRoPjwvc3ZnPg=="
              height="15"
              width="13.125"
              y="290.25"
              x="15.9375"
            ></image>
            <text
              fill="black"
              fontWeight="normal"
              fontStyle="normal"
              fontSize="10px"
              fontFamily="LiberationSans"
              y="300.375"
              x="39"
            >
              {formData.firstName} {formData.lastName}
            </text>
            
            <svg y="320.25" x="15" id="emailaddress"></svg>
            <image
              imageRendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzk1YTg2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PHBhdGggZD0iTTEyOCAyNTZsMTI4IDEyOCAxMjgtMTI4SDEyOHptMjU2LTExMkg0MDRsLTYwLTYwYzEyLjMtMTMuMSAxOS45LTMwLjIgMTkuOS00OGMwLTM5LjgtMzIuMi03Mi05Mi4zLTkyLjcgLTExLjYtMy45LTIzLjQtNy4zLTM1LjMtMTAuM2ExMjggMTI4IDAgMCAwLTMyLjQtMy43TDI1NiAzNiAxMzAuOCAwLjJjLTEzLjUgMy0yNy4zIDYuOS00MS41IDExLjUgLTIwLjYgNi43LTM5LjkgMTQtNTcuNCAyMi41LTQwLjcgMjAtNjkuNyA1My02OS43IDkzLjIgMCAxNy44IDcuNiAzNC45IDIwIDQ4bC02MCA2MEg5OHYyOGg3NFY1MmwyNTYtNTJWNjRIOTEuN2wtNjAuMSA2MEg5OXYyOGg3NHY3MmwtNzQgNzRoMjU2em0yOC0xNzZoNTZsLTEyOCAxMjggMTI4IDEyOEgyNTZ6Ii8+PC9zdmc+"
              height="15"
              width="13.125"
              y="320.25"
              x="15.9375"
            ></image>
            <text
              fill="black"
              fontWeight="normal"
              fontStyle="normal"
              fontSize="10px"
              fontFamily="LiberationSans"
              y="330.375"
              x="39"
            >
              {formData.email}
            </text>
            <svg y="350.25" x="15" id="website"></svg>
            <image
              imageRendering="optimizeSpeed"
              href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMzOTVhODYiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48cGF0aCBkPSJNNDEuNCAzNWgtMTEuNWMtLjggMC0xLjQtLjYtMS40LTEuN3YtLjc1YzAtLjguNi0xLjUgMS40LTEuNWgxMS40Yy44IDAgMS40LjcgMS40IDEuNXYuNzZjMCAuOS0uNiAxLjYtMS40IDEuNnpNMzUgNDBIMjEuNmMtMS4xIDAtMi0xLjItMi0yLjNWMTguN2MwLTEuMS45LTIuMSAyLTIuMmgxMi45YzEuMSAwIDIuMS45IDIuMSAyLjF2MTAuM2MwIC43LS40IDEuNC0xIDEuOC41LjMgMSAxIDEuMSAxLjguMy42LjkgMS4yIDIuNCAxLjNoLjJ2MmgtLjNjLTEuNyAwLTIuMy0uNy0yLjktMS4zLS4zLS4zLS42LS41LS44LS41bC0uMy0uMmMtLjktLjctMS4zLTEuNy0xLjktMi42LS42LjgtMS40IDEuNy0yLjkgMS43em0xNy41LTZjMC0xLjgtMS41LTMuNC0zLjUtMy40LTMuNiAwLTQuNyA0LjItMiA2LjIuOCAxLjEuMyAzLjYtMi40IDMuNmguNHYtMi44aC4xYzEuMyAwIDIuNi0uOCAzLjMtMiAuMy0uMy41LS44LjUtMS4yem0tOC43LTkuMmMtMiAwLTMuNSA0LjUtMSA2LjMuOC43LjkgMyAuMSAzLjJ2LjNoM3YtLjdjMC0uMyAwLS45LS4yLTEuMS0uOC0xLjMtMi41LTQuMS0yLjYtLjctLjYtMS0xLjItMS42LTIuMnoiLz48L3N2Zz4="
              height="15"
              width="13.125"
              y="350.25"
              x="15.9375"
            ></image>
            <text
              fill="black"
              fontWeight="normal"
              fontStyle="normal"
              fontSize="10px"
              fontFamily="LiberationSans"
              y="360.375"
              x="39"
            >
              haroun-menaili.com
            </text>
          </svg>
        </div>
      </div>
    );
  }
  
  export default Test;