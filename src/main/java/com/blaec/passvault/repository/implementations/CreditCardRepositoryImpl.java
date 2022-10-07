package com.blaec.passvault.repository.implementations;

import com.blaec.passvault.model.CreditCard;
import com.blaec.passvault.repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@AllArgsConstructor
@Repository
public class CreditCardRepositoryImpl implements ItemRepository<CreditCard> {
    private final CrudCreditCardRepository crudCreditCardRepository;

    @Override
    public Iterable<CreditCard> getAll() {
        return crudCreditCardRepository.findAll();
    }

    @Override
    public Iterable<CreditCard> getAllByFolderId(int folderId) {
        return crudCreditCardRepository.findAllByFolderId(folderId);
    }

    @Override
    public CreditCard save(CreditCard creditCard) {
        return crudCreditCardRepository.save(creditCard);
    }

    @Override
    public boolean isDeleted(int id) {
        return crudCreditCardRepository.deleteById(id) != 0;
    }
}
