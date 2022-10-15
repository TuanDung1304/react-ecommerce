import styled from "styled-components"

const Button = styled.button`
	border: none;
	border-radius: 5px;
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.3);
	color: #222;
	cursor: pointer;
	transition: all .3s ease;
	&:hover {
		transform: scale(1.1);
	}
`

const Container = styled.div`
	flex: 1;
	margin: 5px;
	height: 70vh;
	position: relative;
	&:hover ${Button} {
		background-color: rgba(255, 255, 255, 0.8);;
	}
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Title = styled.h1`
	color: #fff;
	margin-bottom: 20px;
`


export default function CategoryItem( {item} ) {
  return (
	<Container>
		<Image src={item.img} />
		<Info>
			<Title>
				{item.title}
			</Title>
			<Button>BUY NOW</Button>
		</Info>
	</Container>
  )
}
