<p align="center">
  <img width="360" height="200" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg">
</p>
<p align="center">
  <img width="360" height="200" src="https://miro.medium.com/max/1024/1*2TqPNtQcP2Wk6PN2vxtoaA.png">
</p>

# 🔥 Access our website to see all components.

<a href="https://musing-sammet-e4defb.netlify.app/">Access here !</a>

# 📖 What is this ?

I built this react component library to improve my skills on npm and styled components. Feel free to use any of the components in your personal projects.

# Installation

`npm i styled-css-framework-react`

# Button

```
import React from 'react';
import Button from "styled-css-framework-react/core/Button";

const ButtonComponent = () => {
    return (    
        <div>
        <Card>
        <Button pink>Hello World</Button>
        <Button brown>Hello World</Button>
        <Button>Hello World</Button>
        <Button blue>Hello World</Button>
        <Button red>Hello World</Button>
        <Button yellow>Hello World</Button>
        <Button gray>Hello World</Button>
        <Button purple>Hello World</Button>
        <Button black>Hello World</Button>
        <Button orange>Hello World</Button>
        <Button fluid purple>Hello World</Button>
        </div>
    )
}

export default ButtonComponent

```
# Button Properties

- pink
- brown
- blue
- red
- yellow
- gray
- purple
- black
- orange
- fluid

# Container

```
import React from 'react';
import Container from 'styled-css-framework-react/core/Container';

const ContainerComponent = () => {
    return (
        <div>
        <Container>     
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae possimus qui quas. Non quasi aspernatur consequuntur praesentium veritatis nobis dolorem quis,         harum illum fuga nihil dicta voluptas magni quos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae possimus qui quas. Non quasi aspernatur consequuntur praesentium veritatis nobis dolorem quis,         harum illum fuga nihil dicta voluptas magni quos.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo repudiandae possimus qui quas. Non quasi aspernatur consequuntur praesentium veritatis nobis dolorem quis,         harum illum fuga nihil dicta voluptas magni quos.   
        </p>
        </Container>
        </div>
    )
}

export default ContainerComponent;

```

# Divider

```
import React from 'react';
import Divider from "styled-css-framework-react/core/Divider";

const DividerComponent = () => {
    return (    
        <div> 
        <Divider />
        <Divider dotted/>
        <Divider solid/>
        <Divider rounded/>
        </div>
    )
}

export default DividerComponent;

```
# Divider Properties

- dotted
- solid
- rounded

# Image

```
import React from 'react';
import Image from "styled-css-framework-react/core/Images";

const ImageComponent = () => {
    return (    
        <div>
         <Image src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image rounded src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image small src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image medium src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image big src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         <Image large src={'https://cdn.meutimao.com.br/_upload/noticia/2020/10/22/mantuan-marca-o-primeiro-gol-do-corinthians-na_j1941w.jpg'} />
         </div>
        </div>
    )
}

export default ImageComponent

```
# Image Properties

- rounded
- small
- medium
- big
- large

# Input

```
import React from 'react';
import Input from "styled-css-framework-react/core/Input";

const InputComponent = () => {
    return (    
         <div>
           <Input small placeholder="SMALL INPUT"/>
           <Input medium placeholder="MEDIUM INPUT"/>
           <Input big placeholder="BIG INPUT"/>
           <Input large placeholder="LARGE INPUT" />
           <Input fluid placeholder="FLUID INPUT" />
          </div>
    )
}

export default InputComponent;

```
# Input Properties

- small
- medium
- big
- large
- fluid

# Alert

```
import React from 'react';
import Alert from "styled-css-framework-react/core/Alerts";

const AlertComponent = () => {
    return (    
        <div>
        <Alert>Standard ! This is a standard alert.</Alert>
        <Alert danger>Danger! Indicates a dangerous or potentially negative action.</Alert>
        <Alert success>Success! Indicates a successful or positive action.</Alert>
        <Alert info>Info! Indicates a neutral informative change or action.</Alert>
        <Alert warning>Warning! Indicates a warning that might need attention.</Alert> 
        </div>
    )
}

export default AlertComponent;

```
# Alert Properties

- danger
- success
- info
- warning

# Loader

```
import React from 'react';
import Loader from "styled-css-framework-react/core/Loader";

const SpinnerComponent = () => {
    return (
        <div>
        <Loader />
        <Loader blue />
        <Loader yellow />
        <Loader green />
        </div>
    )
}

export default SpinnerComponent;

```
# Loader Properties

- blue
- yellow
- green

# Form

```
import React from 'react';
import Form from "styled-css-framework-react/core/Form";
import Input from "styled-css-framework-react/core/Input";
import Label from 'styled-css-framework-react/core/Label';
import FormField from 'styled-css-framework-react/core/FormField';
import Button from 'styled-css-framework-react/core/Button';

const FormComponent = () => {
    return (    
        <div>
         <Form>
         <FormField>
           <Label>First Name</Label>   
           <Input fluid placeholder="BIG INPUT"/>
         </FormField>
         <FormField>
           <Label>Last Name</Label>   
           <Input fluid placeholder="BIG INPUT"/>   
         </FormField>  
         <FormField>
           <Label>Password</Label>   
           <Input fluid placeholder="BIG INPUT"/>       
         </FormField>  
         <Button gray fluid>Submit</Button>   
         </Form>
        </div>
    )
}

export default FormComponent;

```

# Card

```
import React from 'react';
import Card from "styled-css-framework-react/core/Card";

const CardComponent = () => {
    return (
        <div>
        <Card>Standard Card</Card>
        <Card gray>Gray Card</Card>    
        </div>
    )
}

export default CardComponent

```
