const total = area * valor;
resultado.textContent = `Orçamento estimado: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
