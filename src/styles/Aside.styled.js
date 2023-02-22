import styled from "styled-components";

const AsideSection = styled.aside`
flex: 2;
display: flex;
flex-direction: column;
padding: 10px;
gap: 25px;

h1 {
    color: #555;
}

.post {
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
}

`

export default AsideSection