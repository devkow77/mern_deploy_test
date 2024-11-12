import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	return res.status(200).send({ data: ['Anna', 'John', 'Patrick'] });
});

router.post('/', (req, res) => {
	return res.status(200).send({ data: ['POST'] });
});

export default router;
