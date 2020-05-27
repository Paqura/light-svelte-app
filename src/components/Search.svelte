<script>
import { Form, FormGroup, Input, Row, Col, Button } from 'sveltestrap';
import { coronaData } from '../stores'
import { coronaService } from '../services/corona';

let searchStr = ''

const onSubmit = async evt => {
  evt.preventDefault();

  if (!searchStr.trim()) {
    const response = await coronaService.getCountries()
    coronaData.set(response)
    return
  }

  const response = await coronaService.getCountry(searchStr)
  coronaData.set([response])
}
</script>

<Form on:submit={onSubmit}>
  <Row>
    <Col>
      <FormGroup controlId="formBasicEmail">
        <Input type="text" placeholder="Country" bind:value={searchStr} />
      </FormGroup>
    </Col>
    <Col>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Col>
  </Row>
</Form>