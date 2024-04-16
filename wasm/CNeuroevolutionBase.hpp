#pragma once

#include <string>
#include <vector>
#include "CNetwork.hpp"

class CNeuroevolutionBase {
protected:
    CNetwork m_network;
public:
    virtual ~CNeuroevolutionBase() {};

    // managing population
    virtual std::string initialPopulation(const std::vector<double>&) = 0;
    virtual std::string generateGeneration(const std::string& population) = 0;
    
    // network managment
    virtual int buildGenome(const std::string& genome) = 0;
    std::vector<double> forward(const std::vector<double>& inputs) {
        return m_network.forward(inputs);
    };
};