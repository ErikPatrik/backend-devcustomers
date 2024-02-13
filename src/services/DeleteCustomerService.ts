import prismaClient from '../prisma/';

interface DeleteCustomerProps {
    id: stirng;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error('ID not informed');
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer) {
            throw new Error('User not found');
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return {
            message: 'User deleted'
        }
    }
}

export { DeleteCustomerService }