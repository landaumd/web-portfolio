import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Grid from './Grid.js';

class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        console.log(this);
        this.setState({ collapse: !this.state.collapse });
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default Collapsible;