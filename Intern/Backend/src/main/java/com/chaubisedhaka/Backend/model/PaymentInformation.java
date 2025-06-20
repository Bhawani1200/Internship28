package com.chaubisedhaka.Backend.model;


import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentInformation {

    @Column(name="cardholder_name")
    private String cardholderName;

    @Column(name="card_number")
    private String CardNumber;

    @Column(name = "expiration_date")
    private LocalDate expiredDate;

    @Column(name="cvv")
    private String cvv;
}
